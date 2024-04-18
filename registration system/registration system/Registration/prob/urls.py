from django.urls import path
from . import views

urlpatterns = [
    path('', views.probability_calculation, name='probability_calculation'),
    path('probabilite-unique/', views.probabiliteUnique, name='probabiliteUnique'),
    path('probabilite-multiple/', views.probabiliteMultiple, name='probabiliteMultiple'),
    path('probabilite-deux-evenements/', views.probabiliteDeuxEvenements, name='probabiliteDeuxEvenements'),
    path('probabilite-conditionnelle/', views.probabiliteConditionnelle, name='probabiliteConditionnelle'),
]
