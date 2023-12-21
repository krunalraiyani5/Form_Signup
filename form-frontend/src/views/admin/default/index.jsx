
import WeeklyRevenue from "./components/WeeklyRevenue";
import TotalSpent from "./components/TotalSpent";


const Dashboard = () => {
  return (
    <div>


      <div className="mt-5 grid grid-cols-1 gap-5 relative md:mt-15 ">
        {/* <WeeklyRevenue /> */}
        <TotalSpent />
      </div>

    

      
    </div>
  );
};

export default Dashboard;
