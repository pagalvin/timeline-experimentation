import React, { useState } from 'react';
import DetailsViewer from './DetailsViewer/DetailsViewer';
import { TimelineData } from './TimelineData';
import './TimeLineExperiment1.css';


function TimeLineExperiment1() {

    
    const scenario1 : TimelineData[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map(i => (
        { Title: `Scenario 1, index [${i}]`, idx: i }));

    const calculateIindexPixelsToTheLeft: () => string = () => { return Math.floor(500 / currentTimelineDataSet.length).toString() + "px"; }

    const [currentTimelineDataSet, setCurrentTimelineDataSet] = useState(scenario1);
    const [currentTimelineMilestone, setCurrentTimelineMilestone] = useState({} as TimelineData);
    const [currentIndexPixelsToTheLeft, setCurrentIndexPixelsToTheLeft] = useState(calculateIindexPixelsToTheLeft());
    
    const staticReponse = (
        <div className="timelineContainer">
            <span className="timeMarker timeMarkerLarge m10percent"></span>
            <span className="timeMarker timeMarkerSmall m10percent"></span>
            <span className="timeMarker timeMarkerLarge m10percent"></span>
            <span className="timeMarker timeMarkerSmall m10percent"></span>
            <span className="timeMarker timeMarkerLarge m10percent"></span>
            <span className="timeMarker timeMarkerSmall m10percent"></span>
            <span className="timeMarker timeMarkerLarge m10percent"></span>
            <span className="timeMarker timeMarkerSmall m10percent"></span>
            <span className="timeMarker timeMarkerLarge m10percent"></span>
            <span className="timeMarker timeMarkerSmall m10percent"></span>
            <span className="line"></span>
            <span className="timeMarker timeMarkerLarge m10percent"></span>
            <span className="timeMarker timeMarkerSmall m10percent"></span>
            <span className="timeMarker timeMarkerLarge m10percent"></span>
            <span className="timeMarker timeMarkerSmall m10percent"></span>
            <span className="timeMarker timeMarkerLarge m10percent"></span>
            <span className="timeMarker timeMarkerSmall m10percent"></span>
            <span className="timeMarker timeMarkerLarge m10percent"></span>
            <span className="timeMarker timeMarkerSmall m10percent"></span>
            <span className="timeMarker timeMarkerLarge m10percent"></span>
            <span className="timeMarker timeMarkerSmall m10percent"></span>
        </div>
    );


    const scenario2 : TimelineData[] = [1, 2, 3, 4, 5].map(i => ({ Title: `Milestone / Activity [${i}]`, idx: i }));


    const getClass: (idx: number) => string = (idx: number) => {
        return idx % 2 === 0 ? "timeMarkerSmall" : "timeMarkerLarge"
    }

    const detailViewer = (milestone : TimelineData) => {
        return (
         <span>
                DetailViewer, current idx: {milestone.idx} 
                <br/>
                Title: {milestone.Title}
                <br/>
                <hr/>
                indexPixelsToTheLeft: {currentIndexPixelsToTheLeft}
         </span>

        );
    };

    const setScenario = (scenarioData : TimelineData[]) => {
        setCurrentIndexPixelsToTheLeft(calculateIindexPixelsToTheLeft());
        setCurrentTimelineDataSet(scenarioData);
    }

    return (
        <div>

            <button onClick={() => setScenario(scenario1)}>Scenario 1</button>
            <button onClick={() => setScenario(scenario2)}>Scenario 2</button>

            <div className="timelineContainer">
                {
                    currentTimelineDataSet.map(d => (
                        <span
                            key={d.idx}
                            className={"timeMarker m10percent " + getClass(d.idx) + ` ${currentTimelineMilestone.idx == d.idx ? "timeMarkerSelected" : ""}`}
                            onMouseOver={() => setCurrentTimelineMilestone(d)}
                            style={{ marginLeft: d.idx > 1 ? calculateIindexPixelsToTheLeft() : 0}}>
                        </span>
                    ))
                }
                <span className="line"></span>
                {
                    currentTimelineDataSet.map(d => (
                        <span
                            key={d.idx}
                            className={"timeMarker m10percent " + getClass(d.idx) + ` ${currentTimelineMilestone.idx == d.idx ? "timeMarkerSelected" : ""}`}
                            onMouseOver={() => setCurrentTimelineMilestone(d)}
                            style={{ marginLeft: d.idx > 1 ? calculateIindexPixelsToTheLeft() : 0}}>
                        </span>
                    ))
                }
            </div>

            <div>
                {detailViewer(currentTimelineMilestone)}
            </div>
        </div>
    )

    // return staticReponse;

}

export default TimeLineExperiment1;

/*

to do this, we'll have some collection of events
something like:
{
    eventeDate: date,
    eventTitle: string,
    eventDescription: string
}

We'll have some timeline thingie:
{
    timelineStart: date;
    timelineEnd: date;
}

Logic:
- get total weeks
- roll around to a Monday start and Friday end of the first/last week respectively

view the timeline in terms of 2 week diads
item 1 is the major
item 2 is the minor


*/