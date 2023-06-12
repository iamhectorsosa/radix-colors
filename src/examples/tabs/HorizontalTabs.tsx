import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/Tabs";
import { PersonIcon, LockClosedIcon } from "@radix-ui/react-icons";

export default function Preview() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-3 p-6 @md:flex-row">
      <Tabs defaultValue="account" className="w-full">
        <TabsList>
          <TabsTrigger value="account">
            <PersonIcon className="mr-2" />
            Account
          </TabsTrigger>
          <TabsTrigger value="password">
            <LockClosedIcon className="mr-2" />
            Password
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}
