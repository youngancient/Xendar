import {
  AllCourses,
  Faqs,
  FiltersByTime,
  FiltersByType,
  IUser,
  Testimonies,
} from "@/Constant/constant";
import { IFilterButton } from "@/components/Button/FilterButton";
import { IContactForm } from "@/components/Contactpage/Contact";
import { ICourse } from "@/components/CourseCard/CourseCard";
import { IFaq } from "@/components/HomepageComp/Faq";
import { ITestimony } from "@/components/HomepageComp/Testimonials";
import { INotification } from "@/components/Info/Notifications";
import { convertToNaira } from "@/components/Info/Wishlist";
import { createSlice } from "@reduxjs/toolkit";

export interface InitialState {
  isNavOpen: boolean;
  isWishlistOpen: boolean;
  isNotificationOpen: boolean;
  notificationList: INotification[] | null;
  allCourses: ICourse[];
  filtersByTime: IFilterButton[];
  filtersByType: IFilterButton[];
  filteredByTimeCourses: ICourse[] | null;
  filteredByTypeCourses: ICourse[] | null;
  testimonies: ITestimony[];
  faqs: IFaq[];
  contactForm: IContactForm | null;
  searchQuery: string | null;
  filteredBySearchCourses: ICourse[] | null;
  filteredSearchCoursesByType: ICourse[] | null;
  isSearching: boolean;
  course: ICourse | null;
  user: IUser | null;
  showPaymentModal: boolean;
  showTryFreeModal: boolean;
}
const initialState: InitialState = {
  isNavOpen: false,
  isWishlistOpen: false,
  isNotificationOpen: false,
  notificationList: null,
  allCourses: AllCourses,
  filtersByTime: FiltersByTime,
  filtersByType: FiltersByType,
  filteredByTimeCourses: null,
  filteredByTypeCourses: null,
  testimonies: Testimonies,
  faqs: Faqs,
  contactForm: null,
  searchQuery: null,
  isSearching: false,
  filteredBySearchCourses: null,
  filteredSearchCoursesByType: null,
  course: null,
  user: null,
  showPaymentModal: false,
  showTryFreeModal: false,
};
export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    toggleNav: (state) => {
      state.isNavOpen = !state.isNavOpen;
    },
    closeNav: (state) => {
      state.isNavOpen = false;
    },
    showWishlist: (state, { payload }) => {
      state.isWishlistOpen = payload;
    },
    showNotificationlist: (state, { payload }) => {
      state.isNotificationOpen = payload;
    },
    setFiltersByTime: (state, { payload }) => {
      const filtered = state.filtersByTime.map((ele) => {
        if (payload === ele.filter) {
          return { ...ele, isSelected: true };
        } else {
          return { ...ele, isSelected: false };
        }
      });
      state.filtersByTime = filtered;
    },
    setFilteredByTimeCourses: (state) => {
      const filter = state.filtersByTime.find((ele) => ele.isSelected === true);
      const filtered = state.allCourses.filter((ele) => {
        return ele.category === filter?.filter;
      });
      state.filteredByTimeCourses = filtered;
    },
    toggleLoved: (state, { payload }) => {
      const toggled = state.allCourses.map((ele) => {
        if (payload === ele.name) {
          return { ...ele, isLoved: !ele.isLoved };
        } else {
          return { ...ele };
        }
      });
      state.allCourses = toggled;
      
    },
    removeFromFavorite: (state, { payload }) => {
      const toggled = state.allCourses.map((ele) => {
        if (payload === ele.name) {
          return { ...ele, isLoved: false };
        } else {
          return { ...ele };
        }
      });
      state.allCourses = toggled;
    },
    removeNotification: (state, { payload }) => {
      if (state.notificationList !== null) {
        const newNotificationList = state.notificationList.filter(
          (ele) => ele.id !== payload
        );
        state.notificationList = newNotificationList;
      }
    },
    pushNotification: (state, { payload }) => {
      if (state.notificationList !== null) {
        const newNotificationList = [payload, ...state.notificationList];
        state.notificationList = newNotificationList;
      } else {
        const newNotificationList = [payload];
        state.notificationList = newNotificationList;
      }
    },

    setActiveTestimonials: (state, { payload }) => {
      const toggled = state.testimonies.map((ele, index) => {
        if (payload === index) {
          return { ...ele, isActive: true };
        } else {
          return { ...ele, isActive: false };
        }
      });
      state.testimonies = toggled;
    },
    resetActiveTestimonials: (state) => {
      state.testimonies = Testimonies;
    },
    showFaqAnswer: (state, { payload }) => {
      const toggled = state.faqs.map((ele, index) => {
        if (payload === index) {
          return { ...ele, showAnswer: !ele.showAnswer };
        } else {
          return { ...ele };
        }
      });
      state.faqs = toggled;
    },
    setFiltersByType: (state, { payload }) => {
      const filtered = state.filtersByType.map((ele) => {
        if (payload === ele.filter) {
          return { ...ele, isSelected: true };
        } else {
          return { ...ele, isSelected: false };
        }
      });
      state.filtersByType = filtered;
    },
    setFilterCoursesByType: (state) => {
      const filter = state.filtersByType.find((ele) => ele.isSelected === true);
      if (filter?.filter === "All Courses") {
        state.filteredByTypeCourses = state.allCourses;
      } else {
        const filtered = state.allCourses.filter((ele) => {
          return ele.field === filter?.filter;
        });
        state.filteredByTypeCourses = filtered;
      }
    },
    resetFiltersByType: (state) => {
      // reset filter if the filter was not on all-courses
      const filter = state.filtersByType.find((ele) => ele.isSelected === true);
      if (filter?.filter !== "All Courses") {
        state.filtersByType = FiltersByType;
      }
    },
    setFilterCoursesBySearch: (state) => {
      const searchResult = state.allCourses.filter((ele) => {
        if (state.searchQuery !== null) {
          return ele.name
            .toLowerCase()
            .includes(state.searchQuery.toLowerCase());
        }
      });
      state.filteredBySearchCourses = searchResult;
      state.filteredSearchCoursesByType = searchResult;
    },
    setFilterSearchedCoursesByType: (state) => {
      const filter = state.filtersByType.find((ele) => ele.isSelected === true);
      if (filter?.filter === "All Courses") {
        state.filteredSearchCoursesByType = state.filteredBySearchCourses;
      } else {
        if (state.filteredBySearchCourses !== null) {
          const filtered = state.filteredBySearchCourses.filter((ele) => {
            return ele.field === filter?.filter;
          });
          state.filteredSearchCoursesByType = filtered;
        }
      }
    },
    setContactForm: (state, { payload }) => {
      state.contactForm = payload;
    },
    setSearchQuery: (state, { payload }) => {
      state.searchQuery = payload;
      state.isSearching = true;
    },
    resetSearchQuery: (state) => {
      state.searchQuery = null;
      state.isSearching = false;
    },
    getCourseById: (state, { payload }) => {
      const getCourse = state.allCourses.find(
        (ele) => ele.id === parseInt(payload)
      );
      if (getCourse) {
        state.course = getCourse;
      }
    },
    getCourseByName: (state, { payload }) => {
      const getCourse = state.allCourses.find((ele) => ele.name === payload);
      if (getCourse) {
        state.course = getCourse;
      }
    },
    setUserData: (state, { payload }) => {
      state.user = payload;
    },
    setShowPaymentModaL: (state, { payload }) => {
      state.showPaymentModal = payload;
    },
    setShowTryFreeModaL: (state, { payload }) => {
      state.showTryFreeModal = payload;
    },
  },
});

export const {
  toggleNav,
  closeNav,
  showWishlist,
  showNotificationlist,
  setFiltersByTime,
  setFilteredByTimeCourses,
  toggleLoved,
  removeFromFavorite,
  removeNotification,
  setActiveTestimonials,
  resetActiveTestimonials,
  showFaqAnswer,
  pushNotification,
  setFiltersByType,
  setFilterCoursesByType,
  setContactForm,
  setSearchQuery,
  resetFiltersByType,
  setFilterCoursesBySearch,
  setFilterSearchedCoursesByType,
  resetSearchQuery,
  getCourseById,
  getCourseByName,
  setUserData,
  setShowPaymentModaL,
  setShowTryFreeModaL,
} = dataSlice.actions;
export default dataSlice.reducer;
