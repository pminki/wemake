CREATE VIEW community_post_list_view AS
SELECT
  posts.post_id,
  posts.title,
  posts.created_at,
  topic.name as topic_name,
  profiles.name as author,
  profiles.avatar as author_avatar,
  profiles.username as author_username,
  COUNT(post_upvotes.post_id) as upvotes
FROM posts
INNER JOIN topics topic USING (topic_id)
INNER JOIN profiles USING (profile_id)
LEFT JOIN post_upvotes USING (post_id)
GROUP BY posts.post_id, topic.name, profiles.name, profiles.avatar, profiles.username;

