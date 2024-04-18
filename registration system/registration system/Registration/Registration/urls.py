# Import necessary modules
from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static 
from django.contrib.auth import views as auth_views
from file.views import home, videos, pdfs
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from users import views


from users.views import CustomLoginView, ResetPasswordView, ChangePasswordView

from users.forms import LoginForm


# Define URL patterns
urlpatterns = [
    # Admin interface URL
    path('', include('home.urls')),
    path('admin/', admin.site.urls),
    path('file/', include('file.urls')),
    path('core/', include('core.urls')),
    path('rooms/', include('room.urls')),
    
    path('users/', include('users.urls')),

    path('login/', CustomLoginView.as_view(redirect_authenticated_user=True, template_name='users/login.html',
                                           authentication_form=LoginForm), name='login'),

    path('logout/', auth_views.LogoutView.as_view(template_name='users/logout.html'), name='logout'),

    path('password-reset/', ResetPasswordView.as_view(), name='password_reset'),

    path('password-reset-confirm/<uidb64>/<token>/',
         auth_views.PasswordResetConfirmView.as_view(template_name='users/password_reset_confirm.html'),
         name='password_reset_confirm'),

    path('password-reset-complete/',
         auth_views.PasswordResetCompleteView.as_view(template_name='users/password_reset_complete.html'),
         name='password_reset_complete'),

    path('password-change/', ChangePasswordView.as_view(), name='password_change'),

    re_path(r'^oauth/', include('social_django.urls', namespace='social')),

 
    path('proba/',include('prob.urls')),
    

]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)