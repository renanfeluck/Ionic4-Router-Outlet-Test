import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { TestPage } from "./test.page";

const routes: Routes = [
	{
		path: "",
		component: TestPage
	}
];

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
	exports: [TestPage],
	declarations: [TestPage]
})
export class TestPageModule {}
