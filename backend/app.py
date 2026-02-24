from flask import Flask, request, jsonify
from flask_cors import CORS
from ai_logic import recommend_tea
from database import init_db

app = Flask(__name__)
# Enable CORS for all routes, allowing frontend on localhost:3000
CORS(app)

# Initialize DB
init_db()

@app.route("/", methods=["GET"])
def home():
    return jsonify({"message": "AI Tea Recommendation API Running"})

# Questionnaire endpoint
@app.route("/api/questions", methods=["GET"])
def get_questions():
    questions = [
        {
            "id": "mood",
            "question": "How are you feeling?",
            "options": ["calm", "stressed", "tired", "happy", "sick"]
        },
        {
            "id": "benefit",
            "question": "What health benefit are you looking for?",
            "options": ["sleep", "energy", "digestion", "immunity", "focus"]
        },
        {
            "id": "caffeine",
            "question": "Caffeine preference?",
            "options": ["none", "moderate", "high"]
        }
    ]
    return jsonify(questions)

# Recommendation endpoint
@app.route("/api/recommend", methods=["POST"])
def recommend():
    user_input = request.json
    result = recommend_tea(user_input)
    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True)
