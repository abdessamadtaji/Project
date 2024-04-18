# In <app_name>/views.py
from django.shortcuts import render
# Example: Importing models from group app into home app views



def index(request):
    return render(request, 'index.html')

def contact(request):
    return render(request, 'contact.html')

def chat(request):
    return render(request, 'chat.html')

def stat(request):
    return render(request, 'stat.html')

def users(request):
    return render(request,'users/home.html')
def file(request):
    return render(request,'home.html')

def probability_calculation(request):
    return render(request, 'indexx.html')
def cal(request):
    return render(request, 'cal.html')


def core(request):
    return render(request, 'core/frontpage.html')
def signup(request):
    return render(request, 'core/signup.html')