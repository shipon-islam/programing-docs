import CodeBlock from "@/components/CodeBlocks";

export default function Python() {
  return (
    <main className="wrapper">
      <section className="mt-4">
        <div>
          <h1 className="font-bold text-3xl">
            Introduction to Python Programming
          </h1>
          <p className="py-4 text-gray-300">
            Python is a high-level, interpreted, and general-purpose programming
            language known for its simplicity and versatility. Created by Guido
            van Rossum in 1991, Python emphasizes readability and reduces the
            complexity of programming. It is widely used in various fields, such
            as web development, data science, artificial intelligence,
            automation, and more.
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
          <h3 className="font-bold text-xl">3. Install Required Packages</h3>
          <p className="pt-2 text-gray-400">
            Use <span className="text-green-500">pip</span> to install packages
            needed for your project.
          </p>
          <div className="grid grid-cols-1 gap-x-2">
            <CodeBlock
              title="example:"
              language="python"
            >{`pip install {package-name} #like django`}</CodeBlock>
            <CodeBlock
              title="To freeze installed dependencies for later use:"
              language="python"
            >{`pip freeze > requirements.txt`}</CodeBlock>
            <CodeBlock
              title="Use pip to install all the packages listed in requirements.txt:"
              language="python"
            >{`pip install -r requirements.txt`}</CodeBlock>
          </div>
        </div>
        <div className="mt-10">
          <h3 className="font-bold text-xl">4. Verify Installation</h3>
          <p className="pt-2 text-gray-400">
            Check if the packages were installed correctly. bash Copy code
          </p>

          <CodeBlock
            title="command:"
            language="python"
          >{`pip list #to see pip installed package`}</CodeBlock>
        </div>
        <div className="mt-10">
          <h3 className="font-bold text-xl">Sample Python Program</h3>
          <p className="pt-2 text-gray-400">
            Here’s an example of a simple Python program:
          </p>

          <CodeBlock
            title="app.py:"
            language="python"
          >{`# Python Program to Add Two Numbers

# Input from user
inputNum1 = float(input("Enter first number: "))
inputNum2 = float(input("Enter second number: "))

# Add numbers
def addition(num1,num2):
    sum = num1 + num2
    return sum
result=addition(inputNum1,inputNum2)
# Display the result
print(f"The sum of {inputNum1} and {inputNum2} is {result}") #output:The sum of 5.0 and 7.0 is 12.0
`}</CodeBlock>
        </div>
      </section>
    </main>
  );
}
