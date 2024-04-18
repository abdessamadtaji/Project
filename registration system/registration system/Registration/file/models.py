from django.db import models
class Video(models.Model):
    title = models.CharField(max_length=100)
    video_file = models.FileField(upload_to='videos/')  # Default upload location

    def __str__(self):
        return self.title

class VideoProb(models.Model):
    title = models.CharField(max_length=100)
    videos_file = models.FileField(upload_to='videoprob/')  # Upload location for videoprob

    def __str__(self):
        return self.title

class PDFFile(models.Model):
    title = models.CharField(max_length=100)
    file = models.FileField(upload_to='pdfs/')

    def __str__(self):
        return self.title
