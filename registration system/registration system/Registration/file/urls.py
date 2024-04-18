from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('videos/', views.videos, name='videos'), 
    path('videoprob/', views.videoprob, name='videoprob'),
    path('pdfs/', views.pdfs, name='pdfs'),
]
