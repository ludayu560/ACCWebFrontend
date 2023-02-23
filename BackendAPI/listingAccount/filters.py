import django_filters
from listingAccount.models import ListingAccount, Interest, PersonalTrait

class ListingAccountFilter(django_filters.FilterSet):

    lel = django_filters.ModelMultipleChoiceFilter(queryset=PersonalTrait.objects.all())
    lol = django_filters.ModelMultipleChoiceFilter(queryset=Interest.objects.all())
    class Meta:
        model = ListingAccount
        fields = {
            'age': ['gte', 'lte'],
            'account_type': ['exact'],
            'personal_traits': ['exact'], 
            'interests': ['exact']
        }