from flask import Flask, render_template

app = Flask(__name__)

# Home Page Route
@app.route("/")
def PLACEHOLDER():
    return render_template('homepage.html')

if __name__ == "__main__":
    app.run(debug=True)