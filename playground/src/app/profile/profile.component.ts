/**
 * Copyright (c) 2021, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
 */

import { Component, OnInit } from "@angular/core";
import { AsgardeoAuthService } from "@asgardeo/auth-angular";

@Component({
    selector: "app-profile",
    templateUrl: "./profile.component.html",
    styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
    accessToken = "";
    isAuthenticated = false;
    userInfo: any = null;

    constructor(private auth: AsgardeoAuthService) { }

    ngOnInit() {
        this.auth.isAuthenticated().then((status) => {
            this.isAuthenticated = status;
            if (this.isAuthenticated) {
                this.auth.getAccessToken().then((token) => this.accessToken = token);
                this.auth.getBasicUserInfo().then((useInfo) => this.userInfo = useInfo);
            }
        });
    }
}
