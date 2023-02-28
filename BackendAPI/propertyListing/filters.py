import django_filters
from propertyListing.models import PropertyListing
    
class PropertyListingFilter(django_filters.FilterSet):    
    utilities = django_filters.CharFilter(field_name='listing_utilities__listing_utility', lookup_expr='exact', method='filter_utilities', label='Utilities')
    class Meta:
        model = PropertyListing
        fields = {
            'listing_city': ['exact'],
            'listing_province': ['exact'],
            'listing_type': ['exact'],
            'listing_rate': ['gte', 'lte'],
            'listing_women_homeowner': ['exact'],
            'listing_total_bedrooms': ['exact'], #total bedrooms or availible bedrooms?
            'listing_den': ['exact'],
            'listing_bathrooms': ['exact'],
            'listing_housemates': ['exact'],
            'listing_furnished': ['exact'],
            'listing_pets': ['exact'],
            'listing_parking': ['exact'],
            'listing_ac': ['exact'],
            'listing_smoking': ['exact']
        }

    
    def filter_utilities(self, queryset, name, value):
        utilities = value.split(',')
        queryset = queryset.filter(listing_utilities__listing_utility__in=utilities)
        return queryset.distinct()