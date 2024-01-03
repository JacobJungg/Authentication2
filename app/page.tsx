import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Home() {
  return (
    
    <div style={{ marginLeft: '20px', marginRight: '20px', marginTop: '20px' }}>
      <Card>
  <CardHeader>
    <CardTitle>Sign in</CardTitle>
    <CardDescription>to continue to application</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>

    </div>
  )
}
