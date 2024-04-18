from django.shortcuts import render
from .models import Video, PDFFile, VideoProb

def home(request):
    return render(request, 'home.html')

def videos(request):
    videos = Video.objects.all()
    return render(request, 'videos.html', {'videos': videos})

def pdfs(request):
    pdfs = PDFFile.objects.all()
    return render(request, 'pdfs.html', {'pdfs': pdfs})
def videoprob(request):
    videoprobs = VideoProb.objects.all()
    return render(request, 'videoprob.html', {'videoprobs': videoprobs})