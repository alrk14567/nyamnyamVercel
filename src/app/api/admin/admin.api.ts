import {api} from "src/app/api/request";
import {Area, CountCost, CountItem, RestaurantList} from "src/app/model/dash.model";
import {strategy} from "src/app/api/api.strategy";
import {PostModel} from "@/app/model/post.model";


const showCount = async (): Promise<CountItem[]> => {
    try {
        const resp = await strategy.GET(`${api.admin}/countUserList`);
        return resp.data;
    } catch (error) {
        console.error("Failed to fetch user counts");
        throw new Error("Failed to fetch user counts");
    }
};

const showArea = async (): Promise<Area[]> => {
    try {
        const resp = await strategy.GET(`${api.admin}/countAreaList`);
        return resp.data;
    } catch (error) {
        console.error("Failed to fetch user counts");
        throw new Error("Failed to fetch user counts");
    }
};

const showRankRestaurant = async (): Promise<RestaurantList[]> => {
    try {
        const resp = await strategy.GET(`${api.admin}/countPostList`);
        return resp.data;
    } catch (error) {
        console.error("Failed to fetch user counts");
        throw new Error("Failed to fetch user counts");
    }
}

const showRestaurant = async (id: string): Promise<RestaurantModel> => {
    try {
        const response = await strategy.GET(`${api.admin}/randomByUserId/${id}`);
        return response.data; // 데이터 반환
    } catch (error) {
        console.error("Failed to fetch notice details:", error);
        throw new Error("Failed to fetch notice details");
    }
}


const receiptList = async (): Promise<CountCost[]> => {
    try {
        const resp = await strategy.GET(`${api.admin}/receiptCount`);
        return resp.data;
    } catch (error) {
        console.error("Failed to fetch user counts");
        throw new Error("Failed to fetch user counts");
    }


}

const upvoteRestaurant = async (): Promise<RestaurantList[]> => {
    try {
        const resp = await strategy.GET(`${api.admin}/upvoteRestaurant`);
        return resp.data;
    } catch (error) {
        console.error("Failed to fetch user counts");
        throw new Error("Failed to fetch user counts");
    }


}

const typeCount = async (id : string): Promise<CountItem[]> => {
    try {
        const resp = await strategy.GET(`${api.admin}/typeList/${id}`);
        return resp.data;
    } catch (error) {
        console.error("Failed to fetch user counts");
        throw new Error("Failed to fetch user counts");
    }
};

const areaCount = async (id : string): Promise<Area[]> => {
    try {
        const resp = await strategy.GET(`${api.admin}/userAreaList/${id}`);
        return resp.data;
    } catch (error) {
        console.error("Failed to fetch user counts");
        throw new Error("Failed to fetch user counts");
    }
};

const currentPost = async (): Promise<PostModel[]> => {
    try {
        const resp = await strategy.GET(`${api.admin}/todayPost`);
        return resp.data;
    } catch (error) {
        console.error("Failed to fetch user counts");
        throw new Error("Failed to fetch user counts");
    }
};








export const admin = {showCount, showArea, showRankRestaurant,showRestaurant, receiptList, upvoteRestaurant, typeCount, areaCount, currentPost}







