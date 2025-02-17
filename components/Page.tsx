"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-background text-foreground py-16 text-center transition-colors">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Welcome to WebTools</h1>
          <p className="text-xl mb-6">
            Your ultimate solution for SEO, image editing, and productivity tools.
          </p>
          <Button className="font-semibold">Get Started</Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted text-muted-foreground transition-colors">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>SEO Analyzer</CardTitle>
                <CardDescription>
                  Analyze your websites SEO performance and improve rankings.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline">Try Now</Button>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Background Remover</CardTitle>
                <CardDescription>
                  Remove image backgrounds with just one click.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline">Try Now</Button>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Keyword Research</CardTitle>
                <CardDescription>
                  Discover high-ranking keywords to grow your business.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline">Try Now</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
