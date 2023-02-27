import django_filters
from listingAccount.models import ListingAccount, Interest, PersonalTrait
from datetime import date
    
class ListingAccountFilter(django_filters.FilterSet):

    age_min = django_filters.NumberFilter(method='filter_age_min', label='Minimum Age')
    age_max = django_filters.NumberFilter(method='filter_age_max', label='Maximum Age')
    personal_traits = django_filters.CharFilter(field_name='personal_traits__trait', lookup_expr='icontains', method='filter_traits', label='Personal Traits')
    interests = django_filters.CharFilter(field_name='interests__interest', lookup_expr='icontains', method='filter_interests', label='Interests')
    
    class Meta:
        model = ListingAccount
        fields = {
            'account_type': ['exact']
        }
    
    def filter_traits(self, queryset, name, value):
        traits = value.split(',')
        queryset = queryset.filter(personal_traits__trait__in=traits)
        return queryset.distinct()
    
    def filter_interests(self, queryset, name, value):
        interests = value.split(',')
        queryset = queryset.filter(interests__interest__in=interests)
        return queryset.distinct()
    
    def filter_age_min(self, queryset, name, value):
        age_min = int(value)
        today = date.today()
        year = today.year - age_min
        birthdate = date(year, today.month, today.day)
        queryset = queryset.filter(date_of_birth__lte=birthdate)
        return queryset.distinct()

    def filter_age_max(self, queryset, name, value):
        age_max = int(value)
        today = date.today()
        year = today.year - age_max - 1
        birthdate = date(year, today.month, today.day)
        queryset = queryset.filter(date_of_birth__gte=birthdate)
        return queryset.distinct()