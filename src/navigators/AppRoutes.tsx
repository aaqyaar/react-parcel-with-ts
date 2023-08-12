import React, { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import { IRoute, routes } from './routes'


const renderRoutes = (routes: IRoute[]) => {
    return (
        <Routes>
            {routes.map((route: IRoute, index: number) => {
                const { route: path, component, children, layout, isPublic, exact } = route;
                const Component = component || Fragment
                const Layout = layout || Fragment;
                return (
                    <Fragment key={index}>
                        {!isPublic ? (
                            <Route key={index} element={<>
                                {/* //? Wrap the private route component */}
                            </>}>
                                <Route
                                    key={index}
                                    path={path}
                                    element={
                                        <Layout>
                                            {children ? renderRoutes(children) : <Component />}
                                        </Layout>
                                    }
                                    index={
                                        exact
                                    }
                                />
                            </Route>
                        ) : (
                            <Route
                                key={index}
                                path={path}
                                element={
                                    <Layout>
                                        {children ? renderRoutes(children) : <Component />}
                                    </Layout>
                                }
                                index={exact}
                            />
                        )}
                    </Fragment>
                );
            })}
        </Routes>
    );
};


export const AppRoutes = () => {
    return renderRoutes(routes)
}