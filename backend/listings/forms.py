from django import forms
from .models import Listing

class ListingsForm(forms.ModelForm):
    class Meta:
        model = Listing
        fields = ['title', 'description', 'area', 'town', 'listing_type', 'property_status', 'price', 'rental_frequency', 'rooms', 'furnished', 'pool', 'elevator', 'cctv', 'parking', 'date_posted', 'latitude', 'longitude', 'picture1', 'picture2', 'picture3', 'picture4', 'picture5'  ]

