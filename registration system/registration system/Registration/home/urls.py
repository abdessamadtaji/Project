# In <app_name>/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('contact/', views.contact, name='contact'),
    path('chat/', views.chat, name='chat'),
    path('stat/', views.stat, name='stat'),
    path('users/',views.users,name='user'),
    path('file/',views.file,name='file'),
     path('core/', views.core, name='core'),
    path('signup/', views.signup, name='signup'),
  
    path('proba/',views.probability_calculation,name='proba'),
    path('cal/', views.cal, name='cal'),
    # Add more URL patterns as needed
   
]
