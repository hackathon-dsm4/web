import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { setKeyword } from "reducer/mypageTabReducer";
import UserElement from "components/Feed/UserElement";
import FeedElement from "components/Feed/FeedElement";
import { background } from "lib/style/colorPalette";
import NoContentComponent from "./noContentComponent";

export const MypageFeed = () => {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.mypageTab.userId);
  const searchType = useSelector(state => state.mypageTab.searchType);
  const keyword = useSelector(state => state.mypageTab.keyword);
  const [feeds, setFeeds] = useState([]);
  const page = useRef(1);
  const [showObserver, setShowObserver] = useState(true);
  const target = useRef(null);
  const [loading, setLoading] = useState(false);
  const [loadData, setLoadData] = useState(false);

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      getData();
    });
  });

  const getData = () => {
    let uri = ``;
    if (keyword) uri = `user/feed/${userId}?searchType=${searchType}&keyword=${keyword}&page=${page.current - 1}`;
    else uri = `user/feed/${userId}?searchType=${searchType}&page=${page.current - 1}`;
    http
      .get(uri)
      .then(data => {
        setFeeds(prevFeeds => [...prevFeeds, ...data.data]);
        setLoadData(true);
        if (data.data.length > 0) page.current += 1;
      })
      .catch(err => {
        alert(err);
      });
  };

  const getInitData = () => {
    page.current = 1;
    let uri = ``;
    if (keyword) uri = `user/feed/${userId}?searchType=${searchType}&keyword=${keyword}&page=${page.current - 1}`;
    else uri = `user/feed/${userId}?searchType=${searchType}&page=${page.current - 1}`;
    http
      .get(uri)
      .then(data => {
        setFeeds(data.data);
        if (data.data.length > 0) page.current += 1;
      })
      .catch(err => {
        alert(err);
      });
  };

  useEffect(() => {
    observer.observe(target.current);
    setLoading(true);
  }, []);

  useEffect(() => {
    if (!loading) return;
    setTimeout(() => getInitData(), 10);
  }, [keyword, userId]);

  return (
    <div>
      <FeedContainer>
        {feeds.length == 0 && loadData ? (
          <NoContentComponent text="피드가 존재하지 않습니다."></NoContentComponent>
        ) : (
          feeds.map(data => {
            return <FeedElement data={data} key={data.feedId} />;
          })
        )}
        {showObserver ? (
          <div id="scrollEnd" style={{ height: "1px", backgroundColor: background }} ref={target}></div>
        ) : (
          ""
        )}
      </FeedContainer>
    </div>
  );
};

const FeedContainer = styled.div`
  display: flex;
  margin: auto;
  box-sizing: border-box;
  width: 100%;
  max-height: 600px;
  gap: 24px;
  background-color:;
  flex-direction: column;
  overflow: auto;
`;
