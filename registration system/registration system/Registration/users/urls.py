from django.urls import path
from .views import home, profile, RegisterView, CustomLogoutView, index  # Import CustomLogoutView

urlpatterns = [
    path('', home, name='users-home'),
    path('register/', RegisterView.as_view(), name='users-register'),
    path('profile/', profile, name='users-profile'),
    path('logout/', CustomLogoutView.as_view(), name='logout'),  # Utiliser CustomLogoutView pour la déconnexion
    path('index/', index, name='index')  # Reference the index view correctly
]