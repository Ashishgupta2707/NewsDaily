import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
  articles=[
    {
      "source": {
        "id": "news-com-au",
        "name": "News.com.au"
      },
      "author": "Holly Hales",
      "title": "Iconic brand’s big call on Clarke",
      "description": "<p>An iconic Australian company has distanced itself from cricketer Michael Clarke in the wake of his video scandal.</p>",
      "url": "https://www.news.com.au/sport/cricket/rm-williams-says-it-has-no-plans-to-work-with-michael-clarke-again-after-video-scandal/news-story/190546ed93972658f1c3afa37dd4832e",
      "urlToImage": "https://content.api.news/v3/images/bin/97ce9af079ea6cd1963a2d0e50dca384",
      "publishedAt": "2023-01-25T03:34:00Z",
      "content": "An iconic Australian company has distanced itself from cricketer Michael Clarke in the wake of his video scandal.\r\nFootwear and clothing brand R.M. Williams confirmed it has “no plans” to work with C… [+2152 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
  ]
  constructor() {
    super();
    console.log("Hello in am a constructor from news component");
    this.state = {
      articles: this.articles,
      loading: false

    }
  }
  render() {
    return (
      <div className="container my-4 ">
        <h2>NewsDaily - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((elements) => {
           return <div className="col-md-4" key={elements.url}>
             <NewsItem  title={elements.title.slice(0,45)} description={elements.description.slice(0,88)} imageurl={elements.urlToImage} newsurl={elements.url} />
                  </div>           
          })}
        </div>

      </div>
    )
  }
}

export default News
