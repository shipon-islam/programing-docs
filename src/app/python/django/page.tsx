import CodeBlock from "@/components/CodeBlocks";

export default function Django() {
  return (
    <main className="wrapper  ">
      <section className="mt-4 overflow-y-auto h-screen scrollbar-thin">
        <div>
          <h1 className="font-bold text-3xl">
            Python Django Framework Introduction
          </h1>
          <p className="py-4 text-gray-300">
            Django is a Python framework that makes it easier to create web
            sites using Python. Django takes care of the difficult stuff so that
            you can concentrate on building your web applications. Django
            emphasizes reusability of components, also referred to as DRY
            (Don&apos;t Repeat Yourself), and comes with ready-to-use features
            like login system, database connection and CRUD operations (Create
            Read Update Delete).
          </p>
        </div>
        <div>
          <h3 className="font-bold text-xl">
            1. Initialize a Virtual Environment
          </h3>
          <p className="pt-2 text-gray-400">
            Create a virtual environment to manage project dependencies.
          </p>
          <CodeBlock
            title="command:"
            language="python"
          >{`python -m venv .env`}</CodeBlock>
        </div>
        <div className="mt-10">
          <h3 className="font-bold text-xl">
            2. Activate the Virtual Environment
          </h3>
          <p className="pt-2 text-gray-400">
            Make sure your virtual environment is active.
          </p>
          <div className="grid grid-cols-1 gap-x-2">
            <CodeBlock
              title="on windows:"
              language="python"
            >{`.env/Scripts/activate`}</CodeBlock>
            <CodeBlock
              title="On macOS/Linux:"
              language="python"
            >{`source .env/bin/activate`}</CodeBlock>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="font-bold text-xl">3. Install django</h3>
          <p className="pt-2 text-gray-400">
            Use <span className="text-green-500">pip</span> to install django
            framework packages for your project.
          </p>
          <div className="grid grid-cols-1 gap-x-2">
            <CodeBlock
              title="example:"
              language="python"
            >{`pip install django`}</CodeBlock>
            <CodeBlock
              title="Verify installation:"
              language="python"
            >{`django-admin --version`}</CodeBlock>
          </div>
        </div>
        <div className="mt-10">
          <h3 className="font-bold text-xl">4. Create a Django Project</h3>
          <p className="pt-2 text-gray-400">
            Run the following command to create a new Django project:
          </p>

          <CodeBlock
            title="command:"
            language="python"
          >{`django-admin startproject myproject`}</CodeBlock>
          <CodeBlock
            title="This creates a directory structure like this:"
            language="python"
          >{`myproject/
    manage.py
    myproject/
        __init__.py
        settings.py
        urls.py
        asgi.py
        wsgi.py
`}</CodeBlock>
        </div>
        <div className="mt-10">
          <h3 className="font-bold text-xl">5. Run the Development Server</h3>
          <p className="pt-2 text-gray-400">
            Navigate into the project directory:
          </p>

          <CodeBlock
            title="navigate:"
            language="python"
          >{`cd myproject`}</CodeBlock>
          <CodeBlock
            title="Run the server:"
            language="python"
          >{`python manage.py runserver
#Starting development server at http://127.0.0.1:8000/`}</CodeBlock>
        </div>
        <div className="mt-10">
          <h3 className="font-bold text-xl">6. Create an App</h3>
          <p className="pt-2 text-gray-400">
            Apps are modular components of a Django project. To create an app:
          </p>

          <CodeBlock
            title="command:"
            language="python"
          >{`python manage.py startapp myapp
`}</CodeBlock>
          <CodeBlock title="now app stucture:" language="python">{`myapp/
    admin.py
    apps.py
    migrations/
        __init__.py
    models.py
    tests.py
    views.py
`}</CodeBlock>
        </div>
        <div className="mt-10">
          <h3 className="font-bold text-xl">7. Register the App</h3>
          <p className="pt-2 text-gray-400">
            Add the app to your project by including it in INSTALLED_APPS in
            settings.py:
          </p>

          <CodeBlock title="python:" language="python">{`INSTALLED_APPS = [
    ...
    'myapp',
]

`}</CodeBlock>
        </div>
        <div className="mt-10">
          <h3 className="font-bold text-xl">8. Database Setup</h3>
          <p className="pt-2 text-gray-400">
            By default, Django uses SQLite. To apply database migrations:
          </p>

          <CodeBlock
            title="command:"
            language="python"
          >{`python manage.py migrate
`}</CodeBlock>
        </div>
        <div className="mt-10">
          <h3 className="font-bold text-xl">9. Start Development</h3>
          <p className="pt-2 text-gray-400">
            You can now create models, views, templates, and URLs for your app.
          </p>

          <CodeBlock
            title="Example for a simple view in myapp/views.py:"
            language="python"
          >{`from django.http import HttpResponse

def home(request):
    return HttpResponse("Hello, Django!")

`}</CodeBlock>
        </div>
      </section>
      <section>
        <div>
          <h3 className="font-bold text-xl">
            1. Custom user and email authentication setup in django
          </h3>
          <p className="pt-2 text-gray-400">
            Create a virtual environment to manage project dependencies.
          </p>
          <CodeBlock
            title="1st step in accounts/model.py:"
            language="python"
          >{`from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractUser


class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("The Email field must be set")
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user
    def create_superuser(self, email, password=None, **extra_fields):
        """Create and return a superuser."""
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError("Superuser must have is_staff=True.")
        if extra_fields.get('is_superuser') is not True:
            raise ValueError("Superuser must have is_superuser=True.")

        return self.create_user(email, password, **extra_fields)


class User(AbstractUser):
    username = None
    name = models.CharField(max_length=50)
    email = models.EmailField(null=True, unique=True)
    bio = models.CharField(max_length=2000)
    avatar = models.ImageField(null=True, default='avatar.png')
    objects = CustomUserManager()
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
`}</CodeBlock>
          <CodeBlock
            title="2nd add this command in setting.py:"
            language="python"
          >{`AUTH_USER_MODEL = "accounts.User"`}</CodeBlock>
          <CodeBlock
            title="3rd you can create in views:"
            language="python"
          >{`from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate, logout
from django.contrib import messages
from .models import User

# Create your views here.


def signup(request):
    if request.method == "POST":
        name = request.POST['name']
        email = request.POST['email']
        avatar = request.FILES.get('avatar')
        password = request.POST['password']
        cpassword = request.POST['cpassword']
        errors = {}
        if not name:
            errors['name'] = 'Name is required.'
        if not email:
            errors['email'] = 'Email is required.'
        elif User.objects.filter(email=email).exists():
            errors['email'] = 'Email already exists.'
        if not password:
            errors['password'] = 'Password is required.'
        elif password != cpassword:
            errors['cpassword'] = 'Passwords do not match.'
        if errors:
            return render(request, 'signup.html', {'errors': errors, 'name': name, 'email': email})
        user = User.objects.create_user(
            name=name, avatar=avatar if avatar else 'avatar.png', email=email, password=password)
        user.save()
        user = authenticate(request, email=email, password=password)

        if user is not None:
            login(request, user)

            return redirect('home')

    return render(request, 'signup.html')


def signin(request):
    if request.method == "POST":
        email = request.POST.get('email')
        password = request.POST.get('password')
        user = authenticate(request, email=email, password=password)
        if user is not None:
            login(request, user)
            messages.success(request, f"Welcome back, {user.email}!")
            return redirect('home')
        else:
            messages.error(
                request, "Invalid username or password. Please try again.")
    return render(request, 'signin.html')


def signout(request):
    logout(request)
    return redirect("/accounts/signin")
`}</CodeBlock>
        </div>
      </section>
    </main>
  );
}
