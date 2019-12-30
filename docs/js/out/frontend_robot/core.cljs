(ns frontend-robot.core
    (:require
      [reagent.core :as r]))

;; -------------------------
;; Views

(defn home-page []
  [:div [:h2 "Welcome, Aman to Clojurescript"]])

;; -------------------------
;; Initialize app

(defn mount-root []
  (r/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
