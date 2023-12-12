
import WeeklyRevenue from "./components/WeeklyRevenue";
import TotalSpent from "./components/TotalSpent";


const Dashboard = () => {
  return (
    <div>
      {/* Card widget */}

    

      {/* Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 ">
        <WeeklyRevenue />
        <TotalSpent />
      </div>

      {/* Tables & Charts */}

      
    </div>
  );
};

export default Dashboard;
