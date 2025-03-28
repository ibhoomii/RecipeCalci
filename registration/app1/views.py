from django.shortcuts import render,HttpResponse,redirect
from django.contrib.auth.models import User 
from django.contrib.auth import authenticate,login,logout
from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from django.http import JsonResponse
import json
from .utils import get_food_data  # Import the function
def ingredient_lookup(request):
    ingredient = request.GET.get("ingredient", "")
    if not ingredient:
        return JsonResponse({"error": "No ingredient provided"}, status=400)

    data = get_food_data(ingredient)
    return JsonResponse(data)
from django.http import JsonResponse

# Sample function for conversion logic
def some_conversion_logic(ingredient, measurement):
    conversion_table = {
        "sugar": {"cup": 200, "tbsp": 12.5, "tsp": 4.2},
        "flour": {"cup": 120, "tbsp": 7.5, "tsp": 2.5},
    }
    
    # Extract unit and quantity from measurement (assuming "1 cup", "2 tbsp" format)
    try:
        qty, unit = measurement.split()
        qty = float(qty)  # Convert string to float

        if ingredient in conversion_table and unit in conversion_table[ingredient]:
            return qty * conversion_table[ingredient][unit]  # Convert to grams
    except Exception as e:
        return f"Error: {str(e)}"

    return "Invalid input"


def convert_measurement(request):
    if request.method == "POST":
        ingredient = request.POST.get("ingredient")
        measurement = request.POST.get("measurement")
        converted_value = some_conversion_logic(ingredient, measurement)
        return JsonResponse({"converted_value": converted_value})
    return JsonResponse({"error": "Invalid request"}, status=400)
# Create your views here.
@login_required(login_url='login')
def HomePage(request):
    return render (request,'home.html')

def SignupPage(request):
    if request.method=='POST':
        uname=request.POST.get('username')
        email=request.POST.get('email')
        pass1=request.POST.get('password1')
        pass2=request.POST.get('password2')

        if pass1!=pass2:
            return HttpResponse("Your password and confrom password are not Same!!")
        else:

            my_user=User.objects.create_user(uname,email,pass1)
            my_user.save()
            return redirect('login')
        
    return render (request,'signup.html')

def LoginPage(request):
    if request.method=='POST':
        username=request.POST.get('username')
        pass1=request.POST.get('pass')
        user=authenticate(request,username=username,password=pass1)
        if user is not None:
            login(request,user)
            return redirect('home')
        else:
            return HttpResponse ("Username or Password is incorrect!!!")

    return render (request,'login.html')
def spaghetti_bolognese(request):
    return render(request, 'spaghetti_bolognese.html')

def chicken_biryani(request):
    return render(request, 'chicken_biryani.html')

def paneer_makhni(request):
    return render(request, 'paneer_makhni.html')

def kheer(request):
    return render(request, 'kheer.html')

def chocolate_cake(request):
    return render(request, 'chocolate_cake.html')
def LogoutPage(request):
    logout(request)
    return redirect('login')

def convert(request):
    return render(request, 'convert.html')

def about(request):
    return render(request, 'about.html')

def portscaling(request):
    return render(request,'portscaling.html')
CONVERSION_RATES = {
    ("cups", "grams"): 120,   # Example: 1 cup = 120g
    ("grams", "cups"): 1/120,
    ("ounces", "grams"): 28.35,
    ("grams", "ounces"): 1/28.35,
}

def ingresub(request):
    return render(request, 'ingresub.html')

'''def ingresub(request):
    suggestions = None
    if request.method == "POST":
        ingredient = request.POST.get("ingredient", "").lower()
        suggestions = SUBSTITUTIONS.get(ingredient, ["No alternative found"])

    return render(request, "ingresub.html", {"suggestions": suggestions})'''
def conversions(request):
     return render(request, 'conversions.html')