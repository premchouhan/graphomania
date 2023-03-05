import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://media.istockphoto.com/id/1348728804/photo/young-hiker-man-taking-selfie-portrait-on-the-top-of-mountain-happy-guy-smiling-at-camera.jpg?b=1&s=170667a&w=0&k=20&c=inclpulbzGF0fUeyC3UELPcijbsnIk_LWRB2rmM1twg=" />
      <Post img="https://images.unsplash.com/photo-1485579149621-3123dd979885?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
      <Post img="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2QlMjBhbmQlMjBkcmlua3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
      <Post img="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
      <Post img="https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2luZW1hfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
    </div>
  );
}
