import CodeBlock from "@/components/CodeBlocks";

export default function Django() {
  return (
    <main className="wrapper">
      <section className="mt-4">
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
    </main>
  );
}
