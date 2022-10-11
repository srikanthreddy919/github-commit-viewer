import React from "react";
import { Octokit } from "octokit";
import Cookies from "js-cookie";
import { useQuery } from "react-query";
import ListItem from "./ListItem";

const fetchCommits = async () => {
  const octokit = new Octokit({
    auth: Cookies.get("accessToken"),
  });
  return octokit.request("GET /repos/{owner}/{repo}/commits", {
    owner: "srikanthreddy919",
    repo: "university-management",
  });
};

const CommitList = () => {
  const { isLoading, error, data } = useQuery("commits", fetchCommits);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return data?.data?.map((commit) => <ListItem commit={commit} />);
};

export default CommitList;
