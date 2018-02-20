package com.connectin;


import com.connectin.authenticate.security.AuthenticationFilter;
import com.connectin.authenticate.security.handlers.AuthenticationSuccessHandler;
import com.connectin.authenticate.security.provider.AuthProvider;
import com.connectin.authenticate.security.userdetails.UserDetailServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class ApplicationSecurity extends WebSecurityConfigurerAdapter {


    @Autowired
    private SimpleUrlAuthenticationSuccessHandler authenticationSuccessHandler;

    @Autowired
    private AuthenticationProvider authProvider;

    @Bean(name = "userDetailsService")
    public UserDetailsService userDetailsService() {
        return new UserDetailServiceImpl();
    }

//
//    @Bean(name = "authProvider")
//    public AuthenticationProvider authProvider() {
//        return new AuthProvider();
//    }

    @Bean(name = "authenticationSuccessHandler")
    public SimpleUrlAuthenticationSuccessHandler authenticationSuccessHandler() {
        return new AuthenticationSuccessHandler();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        // TODO Auto-generated method stub
        auth.authenticationProvider(authProvider);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {

        http.csrf().disable()

                .authenticationProvider(authProvider)
                .authorizeRequests()
                .antMatchers(HttpMethod.POST, "/connectin/api/token**").permitAll()
                .antMatchers(HttpMethod.POST, "/connectin/api/login**").permitAll()
                .antMatchers(HttpMethod.OPTIONS, "/**").permitAll()
                .anyRequest().authenticated().and()
                .addFilterBefore(new AuthenticationFilter(),
                        UsernamePasswordAuthenticationFilter.class)
                .formLogin()
                .loginPage("/login").failureUrl("/login?error=true")
                .successHandler(authenticationSuccessHandler)
                .usernameParameter("username")
                .passwordParameter("password")

                .and().logout()
                .logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
                .logoutSuccessUrl("/").and().exceptionHandling()
                .accessDeniedPage("/403").and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
                ;


    }
    @Override
    public void configure(WebSecurity web) throws Exception {
        web.ignoring().antMatchers("/connectin/api/token/**").antMatchers("/connectin/api/login/").antMatchers("/connectin/api/login");
    }

}
