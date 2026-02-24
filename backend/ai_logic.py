from teadata import teas

def recommend_tea(user_input):
    """
    Simple keyword matching recommendation logic.
    user_input: dict containing answers to questionnaire.
    """
    recommended_teas = []
    
    # Extract preferences
    mood = user_input.get("mood", "").lower()
    benefit = user_input.get("benefit", "").lower()
    caffeine = user_input.get("caffeine", "").lower()

    for tea in teas:
        score = 0
        if mood and mood in tea.get("mood", "").lower():
            score += 1
        if benefit and benefit in tea.get("benefit", "").lower():
            score += 1
        if caffeine and caffeine == tea.get("caffeine", "").lower():
            score += 1
        
        if score > 0:
            recommended_teas.append(tea)
    
    # If no matches, return a default or all
    if not recommended_teas:
        return teas[:3]
        
    return recommended_teas
