import React from "react";
import AppLayout from "../component/AppLayout";
import Head from "next/head";
import NicknameEditForm from "../component/NicknameEditForm";
import FollowList from "../component/FollowList";

const Profile = () => {
  const followerList = [
    { nickname: "제로초" },
    { nickname: "바보" },
    { nickname: "우희" },
  ];
  const followingList = [
    { nickname: "제로초" },
    { nickname: "바보" },
    { nickname: "우희" },
  ];
  return (
    <div>
      <Head>내 프로필 | NodeBird</Head>
      <AppLayout>
        <NicknameEditForm></NicknameEditForm>
        <FollowList header="팔로워 목록" data={followingList}></FollowList>
        <FollowList header="팔로잉 목록" data={followerList}></FollowList>
      </AppLayout>
    </div>
  );
};
export default Profile;
