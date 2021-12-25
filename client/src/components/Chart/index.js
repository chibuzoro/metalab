import {memo, useContext, useEffect, useState} from 'react';
import {Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import DataContext from "../../contexts/DataContext";
import CustomToolTip from "./CustomTooltip";

const Chart = ({theme}) => {

    const {chartData} = useContext(DataContext);
    const [data, setData] = useState([]);
    const [lineData, setLineData] = useState([]);

    useEffect(() => {

        const keys = Object.keys(chartData);

        /**
         * Build Data for Line points
         */
        const prepareLines = () => {
            const lines = [];
            keys.forEach((key) => {
                lines.push({
                    key_name: key,
                    color_tag: chartData[key].color_tag
                })

            });
            setLineData(lines);
        }

        /**
         * Build chart data points
         */
        const prepareChart = () => {
            const chart = [];
            for (let i = 0; i < 52; ++i) {
                const week = {};
                keys.forEach((key) => {
                    week[key] = chartData[key].commits[i]?.total
                    week['week'] = chartData[key].commits[i]?.week

                });
                chart.push(week);
            }

            setData(chart);

        }


        prepareLines();
        prepareChart();

    }, [chartData]);


    return (
        <ResponsiveContainer width="100%" height={"100%"}>
            <LineChart
                data={data}
                margin={
                    {
                        top: 130,
                        right: 50,
                        left: 50,
                        bottom: 50
                    }
                }
            >
                <XAxis mirror tick={{display: 'none'}} dataKey="week" tickSize={20}/>
                <YAxis mirror tick={{display: 'none'}} tickSize={20}/>
                <Tooltip cursor={false} content={CustomToolTip}/>
                {

                    lineData.map((obj) => (
                        <Line
                            type="natural"
                            key={obj.key_name}
                            dataKey={obj.key_name}
                            stroke={obj.color_tag}
                            dot={{strokeWidth: 2, r: 10}}
                            strokeWidth={3.5}
                            activeDot={{r: 13}}/>)
                    )
                }
            </LineChart>
        </ResponsiveContainer>
    )
}


export default memo(Chart);
