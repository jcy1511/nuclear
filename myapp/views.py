from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.


def index(request):
    return render(request, 'Home/home.html')


def s1(request):
    return render(request, 'Home/s1.html')
