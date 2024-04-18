from django.shortcuts import render

def probability_calculation(request):
    return render(request, 'index.html')
def probabiliteUnique(request):
    return render(request, 'index1.html')
def probabiliteMultiple(request):
    return render(request, 'index2.html')
def probabiliteDeuxEvenements(request):
    return render(request, 'index3.html')
def probabiliteConditionnelle(request):
    return render(request, 'index4.html')
