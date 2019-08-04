import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { TestPage } from "./test/test.page";

const routes: Routes = [
	{ path: "", redirectTo: "home", pathMatch: "full" },
	{ path: "home", loadChildren: () => import("./home/home.module").then(m => m.HomePageModule) },
	{
		path: "test",
		component: TestPage,
		children: [
			{
				path: "test1",
				loadChildren: "./test/test1/test1.module#Test1PageModule"
			},
			{ path: "test2", loadChildren: "./test/test2/test2.module#Test2PageModule" }
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
	exports: [RouterModule]
})
export class AppRoutingModule {}
