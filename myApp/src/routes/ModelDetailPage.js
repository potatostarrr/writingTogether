/**
 * Created by tengzhongwei on 5/1/17.
 */
import TopicDetailLayout from '../components/ModelWriting/ModelDetailLayout'
import Headshot from '../components/plugin/Headshot'
import {Row,Card,Col} from 'antd'
import CommentsBox from '../components/CommentsBox'

class TopicDetailPage extends React.Component{
  render(){
    return(
    <TopicDetailLayout>
      <Row type="flex" justify="space-around" >
        <p style={{fontSize:24, marginBottom:24}}>Model Writing</p>
      </Row>
      <Row>
        <Card>
          <Row>
            <Col span={2} offset={4}>
              <Headshot url = "https://media4.giphy.com/media/3o8doNAGKZXsrsgzW8/200_s.gif" />
            </Col>
            <Col span={16} offset={2}>
              <Card >
                <h2 style={{marginBottom:36}}>
                  Indy’s Life Story
                </h2>
                <div>
                  I am going to tell you about my dog and how I got him. I don’t remember exactly how it happened, but at some point my parents asked if I wanted to have a dog. I, of course, said yes. We couldn’t decide what kind of dog to get at first, but at last we found a great breed, the Shetland sheepdog. We called a good breeder. I was so excited about getting a dog!
                </div>
                <div>
                  Before I knew it, I was on my way to the breeder. I went inside and saw dogs everywhere. It was so hard to pick which one to get. I saw one I liked. It was a small blue merle. He looked perfect, so I asked if we could get him. It turned out that he was too young to sell. So I kept looking. When I finally decided on one, we were all very happy. It still took a few weeks until he was old enough to bring home. It seemed to take forever until the day came, but it did.
                </div>
                <div>
                  It was so exciting. We were on our way to pick up our newest family member. When we went to pick him up, we realized that we had everything except the most important thing, a name! On our way home, we came up with what seemed like the perfect name: Indiana. This name came from his head coloring, believe it or not. His head was the same color as Indiana Jones’s hat. Like all dog names, it was shortened to Indy and eventually shortened to Ind.
                </div>
                <div>
                  We loved Indy, yet it wasn’t all fun and games. We had to make major adjustments for him. When he was young, we had to blockade parts of the house because they were too dangerous for him. Another reason we had to block things off was that Indy was not yet housebroken. We also had to move my cat’s food because Indy kept eating it. Finally, we had to build him a kennel.
                </div>
                <div>
                  Yes, we had to make a lot of changes, but Indy has changed a lot since the day we got him. He is no longer a puppy, and he is housebroken! Now he’s pretty much everyone’s buddy. We are so glad we found him.
                </div>
              </Card>
            </Col>
          </Row>
        </Card>
      </Row>
      <Row type="flex" justify="space-around" style={{marginTop:56}}>
        <CommentsBox hint="Choose one paragraph as your model writing, and then write your story under the paragraph structure."/>
      </Row>

    </TopicDetailLayout>
    )
  }
}

export default TopicDetailPage;
