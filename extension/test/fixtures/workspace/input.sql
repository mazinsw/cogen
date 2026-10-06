CREATE TABLE Users (
  id INT NOT NULL,
  full_name TEXT COMMENT 'User name[S]',
  active BOOL NOT NULL DEFAULT 1,
  PRIMARY KEY (id)
) COMMENT = 'Users[N:User|Users]';

CREATE TABLE Posts (
  id INT NOT NULL,
  user_id INT NOT NULL,
  title TEXT,
  PRIMARY KEY (id),
  CONSTRAINT FOREIGN KEY (user_id) REFERENCES Users (id)
);
