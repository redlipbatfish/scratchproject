CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    user_name VARCHAR(30) NOT NULL UNIQUE, 
    email VARCHAR(40) NOT NULL UNIQUE,
    password VARCHAR(40) NOT NULL
)

CREATE TABLE habits(
    id SERIAL PRIMARY KEY,
    habit_name VARCHAR(30) NOT NULL,
    is_boolean BOOLEAN NOT NULL
)

CREATE TABLE user_habits(
    user_id INTEGER,
    habit_id INTEGER,
    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(habit_id) REFERENCES habits(id),
    target_num INTEGER,
    active BOOLEAN
)

CREATE TABLE user_habit_records(
    user_id INTEGER,
    habit_id INTEGER,
    FOREIGN KEY(user_id)  REFERENCES users(id),
    FOREIGN KEY(habit_id)  REFERENCES habits(id),
    date DATE,
    fullfilled_percent DECIMAL
)

CREATE TABLE daily_count(
    user_id INTEGER,
    FOREIGN KEY(user_id) REFERENCES users(id),
    data DATE,
    total_percent DECIMAL
)


-- Add Habits
INSERT INTO habits (habit_name, is_boolean)
VALUES('Water', false),
('Make Bed', true),
('Walk Dog', false),
('Sleep on Time', true),
('Stretch', false);
