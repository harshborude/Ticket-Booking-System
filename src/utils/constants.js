// src/constants.js

export const UserRolesEnum = {
    ADMIN: "ADMIN",
    USER : "USER"
};

export const AvailableUserRoles = Object.values(UserRolesEnum);

export const BookingStatusEnum = {
    PENDING_PAYMENT: "PENDING_PAYMENT",
    CONFIRMED: "CONFIRMED",
    CANCELLED: "CANCELLED",
    WAITLISTED: "WAITLISTED",
};

export const AvailableBookingStatuses = Object.values(BookingStatusEnum);

export const CoachClassEnum = {
    SLEEPER: "SL",
    AC_3_TIER: "3A",
    AC_2_TIER: "2A",
    AC_1_TIER: "1A",
};

export const AvailableCoachClasses = Object.values(CoachClassEnum);