
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import TotalSpent from "views/admin/default/components/TotalSpent";




const Dashboard = () => {
  return (
    <div>
     

      <div className="mt-5 grid grid-cols-1 gap-5 ">
        <WeeklyRevenue />
        <TotalSpent />
      </div>

   

      
    </div>
  );
};

export default Dashboard;
