import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/Tabs";

export default function Preview() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-3 @md:flex-row">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}
