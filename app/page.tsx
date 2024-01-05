import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"


export default function Home() {
  return (
    
    <div style={{ marginLeft: '20px', marginRight: '20px', marginTop: '20px' }}>
      <Card>
  <CardHeader>
    <CardTitle>Sign in</CardTitle>
    <CardDescription>to continue to ap</CardDescription>
  </CardHeader>
  <CardContent>
    Username
  <Input placeholder="Username" />
  </CardContent>
</Card>

    </div>
  )
}
