import "./pieChartBox.scss"
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
    { name: "0-18", value: 400, color: "#0088FE" },
    { name: "18-30", value: 300, color: "#00C49F" },
    { name: "30-50", value: 400, color: "#FFBB2B" },
    { name: "50+", value: 400, color: "#FF8042" },
];
const PieChartBox = () => {
    return (
        <div className="pieChartBox">
            <h1>Age comparison</h1>
            <div className="chart">
                <ResponsiveContainer width="99%" height={300}>
                    <PieChart>
                        <Tooltip contentStyle={{ background: "white", borderRadius: "5px" }} />
                        <Pie
                            data={data}
                            innerRadius={"70%"}
                            outerRadius={"90%"}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {data.map((item) => (
                                <Cell
                                    key={item.name}
                                    fill={item.color} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>

            <div className="options">
                {data.map((item) => (
                    <div className="option" key={item.name}>
                        <div className="title">
                            <div className="dot" style={{ backgroundColor: item.color }} />
                            <span>{item.name}</span>
                        </div>
                        <span>{item.value}</span>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default PieChartBox;
// For reusing a component we introduce props
