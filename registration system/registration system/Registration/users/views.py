from django.contrib.auth.decorators import login_required
from django.contrib.auth import login, logout
from django.contrib.auth.views import LoginView, PasswordChangeView, LogoutView, PasswordResetView
from django.contrib.messages.views import SuccessMessageMixin
from django.shortcuts import render, redirect
from django.urls import reverse_lazy
from django.views import View
from .forms import RegisterForm, LoginForm, UpdateUserForm, UpdateProfileForm
from django.contrib import messages

def home(request):
    return render(request, 'users/home.html')

@login_required
def index(request):
    if not request.user.is_authenticated:
        logout(request)
        messages.warning(request, 'You are not logged in.')
        return redirect('login')

    return render(request, 'index.html')
class RegisterView(View):
    form_class = RegisterForm
    initial = {'key': 'value'}
    template_name = 'users/register.html'

    def dispatch(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            return redirect(to='/')
        return super(RegisterView, self).dispatch(request, *args, **kwargs)

    def get(self, request, *args, **kwargs):
        form = self.form_class(initial=self.initial)
        return render(request, self.template_name, {'form': form})

    def post(self, request, *args, **kwargs):
        form = self.form_class(request.POST)

        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            messages.success(request, f'Account created for {username}')
            return redirect(to='login')

        return render(request, self.template_name, {'form': form})


class CustomLoginView(LoginView):
    form_class = LoginForm

    def form_valid(self, form):
        remember_me = form.cleaned_data.get('remember_me')

        if not remember_me:
            # Set session expiry to 0 seconds.
            self.request.session.set_expiry(0)
            # Set session as modified to force data updates/cookie to be saved.
            self.request.session.modified = True

        # Call parent method to handle successful login.
        response = super(CustomLoginView, self).form_valid(form)

        # Additional session management if needed.
        # Example: You might want to store additional data in the session upon login.
        # self.request.session['custom_key'] = 'custom_value'

        return response


class CustomLogoutView(LogoutView):
    next_page = reverse_lazy('index')  # Redirection après la déconnexion

    def dispatch(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            logout(request)  # Déconnexion de l'utilisateur
            messages.info(request, 'You have been logged out.')  # Message informatif
            return redirect(self.next_page)
        else:
            # L'utilisateur n'est pas connecté, redirigez-le vers la page d'accueil
            messages.warning(request, 'You are not logged in.')
            return redirect(self.next_page)


class ResetPasswordView(SuccessMessageMixin, PasswordResetView):
    template_name = 'users/password_reset.html'
    email_template_name = 'users/password_reset_email.html'
    subject_template_name = 'users/password_reset_subject'
    success_message = "We've emailed you instructions for setting your password, " \
                      "if an account exists with the email you entered. You should receive them shortly." \
                      " If you don't receive an email, " \
                      "please make sure you've entered the address you registered with, and check your spam folder."
    success_url = reverse_lazy('users-home')


class ChangePasswordView(SuccessMessageMixin, PasswordChangeView):
    template_name = 'users/change_password.html'
    success_message = "Successfully Changed Your Password"
    success_url = reverse_lazy('users-home')



def profile(request):
    if request.method == 'POST':
        user_form = UpdateUserForm(request.POST, instance=request.user)
        profile_form = UpdateProfileForm(request.POST, request.FILES, instance=request.user.profile)

        if user_form.is_valid() and profile_form.is_valid():
            user_form.save()
            profile_form.save()
            messages.success(request, 'Your profile is updated successfully')
            return redirect(to='users-profile')
    else:
        user_form = UpdateUserForm(instance=request.user)
        profile_form = UpdateProfileForm(instance=request.user.profile)

    return render(request, 'users/profile.html', {'user_form': user_form, 'profile_form': profile_form})
