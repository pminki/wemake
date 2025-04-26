import { redirect } from "react-router";

/*
  loader() 함수의 기능
    1. UI 컴포넌트를 위해 데이터를 불러올 수 있음.
    2. redirect()를 사용해 다른 페이지 이동할 수 있음.
    3. Response.json()를 사용하여 API 서비스로 사용할 수 있음.
*/
export function loader() {
  // redirect
  // return redirect("/products/leaderboards");

  // api - json return
  // return Response.json({ hello: "world" });
}
