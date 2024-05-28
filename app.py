from flask import Flask, render_template

app = Flask(__name__)

# Home Page Route
@app.route("/")
def PLACEHOLDER():
    return render_template("homepage.html")

# Quiz 1 Route
@app.route("/Quiz1")
def Quiz1_Page():
    return render_template("quiz1.html")

# Quiz 2 Route
@app.route("/Quiz2")
def quiz2():
    return render_template("quiz2.html")

if __name__ == "__main__":
    app.run(debug=True)