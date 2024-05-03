import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AuthContext } from "@/contexts/auth";
import { useContext } from "react";

const transactions = [
  {
    title: "#89992323",
    description: "test@gmail.com",
    total: "$40.00",
  },
  {
    title: "#89992323",
    description: "test@gmail.com",
    total: "$40.00",
  },
  {
    title: "#89992323",
    description: "test@gmail.com",
    total: "$40.00",
  },
  {
    title: "#89992323",
    description: "test@gmail.com",
    total: "$40.00",
  },
];

export default function ProfilePage() {
  const { logout } = useContext(AuthContext);
  return (
    <div>
      <div className="flex flex-col justify-center items-center py-3">
        <h1 className="text-3xl text-center mb-5">My Ecommerce</h1>
        <Button onClick={logout} className="w-auto">
          Logout
        </Button>
      </div>

      <div className="flex flex-wrap gap-5 p-4 justify-center items-start">
        <Card className="w-[380px]">
          <CardHeader>
            <CardTitle>Information</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-5">
            <div>
              <h2 className="font-bold">Address</h2>
              <p>Jl Jenderal Sudirman 1 no 5, Jakarta</p>
            </div>
            <div>
              <h2 className="font-bold">Profile</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
                harum distinctio nam asperiores error nemo vel deleniti
                laudantium expedita ipsam exercitationem non quo enim, maiores
                sed ullam similique dolorem dignissimos!
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="w-[380px]">
          <CardHeader>
            <CardTitle>Latest Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              {transactions.map((notification, index) => (
                <div
                  key={index}
                  className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                >
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {notification.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {notification.description}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {notification.total}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
